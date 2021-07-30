import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {gameType, socketEvent, teamColors} from '../../models/models';
import {SocketEventsService} from '../../services/socket-events.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  gameType: gameType;
  timeToEnd: number;
  answers: { team: string, answer }[];
  answeringTeam: string;
  gamePhase: string;
  selectedTeam: teamColors;
  teams: teamColors[];
  form: FormGroup = new FormGroup({
    myAnswer: new FormControl(null)
  });
  freeze = false;
  freezeTime: Date;


  constructor(private api: ApiService, private se: SocketEventsService) {
    this.se.socketEventsSub.subscribe((e) => {
      this.checkFreeze(e);
      this.gameType = e.gameType;
      this.gamePhase = e.gamePhase;
      this.answeringTeam = e.answeringTeam;
      this.teams = e.teams;
      this.answers = e.answered;
    });
  }

  ngOnInit(): void {
    this.api.getState().toPromise().then(res => {
      console.log(res);
      if (res.gameType) {
        this.gameType = res.gameType;
        this.gamePhase = res.phase;
        this.teams = res.teams;
        this.answers = res.answered;
      }
    });
  }

  selectTeam(team): void {
    this.selectedTeam = team;
  }

  canAnswerSI(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting');
  }

  makeAnswer(): void {
    this.api.makeAnswer(this.selectedTeam, this.form.getRawValue().myAnswer).toPromise().then();
    this.form.reset({});
  }

  canAnswerCHGK(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting') && this.answers.every(a => a.team !== this.selectedTeam);
  }

  canAnswerBrain(): boolean {
    return this.selectedTeam && (this.gamePhase === 'waiting');
  }

  private checkFreeze(e: socketEvent): void {
    if (this.gamePhase === 'answering' &&
      e.gamePhase === 'waiting' &&
      this.answeringTeam === this.selectedTeam
    ) {
      this.freezeTime = new Date();
      this.freeze = true;
      this.waitFreeze();
    }
  }

  waitFreeze(): void{
    const ct = new Date();
    if ((+ct - +this.freezeTime) >= 7000){
      this.freeze = false;
      return;
    }
    setTimeout(this.waitFreeze.bind(this), 100);
  }

  getFreezeEnd(): string| number {
    const ct = new Date();
    return ((7000 - (+ct - +this.freezeTime))/1000).toFixed(1);
  }
}
