import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sound-effects',
  templateUrl: './sound-effects.component.html',
  styleUrls: ['./sound-effects.component.scss']
})
export class SoundEffectsComponent implements OnInit {
  sounds: {
    block?: string,
    title: string,
    fileName: string,
  }[] =
    [
    {
      title: '8-bit',
      fileName: '4maps',
      block: 'effects'
    },
    {
      title: '100k1',
      fileName: '6_sto-k-odnomu-ne-pra_ilnyy-ot_et',
      block: 'no'
    },
    {
      title: 'аудитория',
      fileName: '33ea7ac1f623d74',
      block: 'yes'
    },
    {
      title: 'Звено туду',
      fileName: 'after-interview-sting',
      block: 'games'
    },
    {
      title: 'перезарядка ак47',
      fileName: 'ak47_boltpull',
      block: 'effects'
    },
    {
      title: 'авп достать',
      fileName: 'awp_draw',
      block: 'effects'
    },
    {
      title: 'в голову',
      fileName: 'bhit_helmet-1',
      block: 'effects'
    },
    {
      title: '10 сек бомба',
      fileName: 'bombtenseccount',
      block: 'effects'
    },
    {
      title: 'c4_explode1',
      fileName: 'c4_explode1',
      block: 'effects'
    },
    {
      title: 'звено старт',
      fileName: 'clock-start-sting',
      block: 'games'
    },
    {
      title: 'crank-that',
      fileName: 'crank-that',
      block: 'memes'
    },
    {
      title: 'кс смерть',
      fileName: 'deathcam',
      block: 'no'
    },
    {
      title: 'gong',
      fileName: 'df211076773eb8f',
      block: 'effects'
    },
    {
      title: 'туду-дуду',
      fileName: 'd-mp3cut',
      block: 'memes'
    },
    {
      title: 'monster_kill',
      fileName: 'dota_monster_kill-namobilu.com',
      block: 'yes'
    },
    {
      title: 'барабаны',
      fileName: 'drumroll_swf',
      block: 'effects'
    },
    {
      title: 'Димооон',
      fileName: 'em_-_dimon_61126598',
      block: 'memes'
    },
    {
      title: 'Пробитие',
      fileName: 'est-probitie',
      block: 'yes'
    },
    {
      title: 'СИ заставка',
      fileName: 'finaltit',
      block: 'games'
    },
    {
      title: 'Звено голосование',
      fileName: 'general-bed',
      block: 'games'
    },
    {
      title: 'Звено конец раунда',
      fileName: 'general-lets-play-sting',
      block: 'general-lets-play-sting'
    },
    {
      title: 'xp err',
      fileName: 'green_screen_windows_xp',
      block: 'effects'
    },
    {
      title: '((((',
      fileName: 'grustnaya-melodiya-na-skripke-dlya-grustnogo-momenta-ispolzuetsya-v-memah-dlya-grustnogo-litsa-krupnyim-planom-3342',
      block: 'memes'
    },
    {
      title: 'headshot',
      fileName: 'headshot1',
      block: 'effects'
    },
    {
      title: 'nein',
      fileName: 'hitler-nein_1',
      block: 'no'
    },
    {
      title: 'john-cena',
      fileName: 'iz-mema-djon-sina-john-cena-na-ringe-3387',
      block: 'memes'
    },
    {
      title: 'кхсм верно',
      fileName: 'khsm_q1-5-correct-o',
      block: 'yes'
    },
    {
      title: 'кхсм неверно',
      fileName: 'khsm_q6-wrong',
      block: 'no'
    },
    {
      title: 'ГОЛОСОВАНИЕ',
      fileName: 'ks-1.6-golosovanie_(mp3CC.biz)',
      block: 'memes'
    },
    {
      title: 'лежать',
      fileName: '-lejat-sasat',
      block: 'no'
    },
    {
      title: 'ЧГК команда',
      fileName: 'meeting',
      block: 'games'
    },
    {
      title: 'murloc',
      fileName: 'murloc',
      block: 'memes'
    },
    {
      title: 'to be continue',
      fileName: 'muzyika-iz-mema-na-gitare-kogda-prodoljenie-sleduet-no-chto-to-ne-okoncheno-lt--to-be-continued-3400',
      block: 'memes'
    },
    {
      title: 'gta sa',
      fileName: 'muzyika-s-proydennoy-missiey-iz-gta-san-andreas-mission-complete-3395',
      block: 'yes'
    },
    {
      title: 'Делать не буду',
      fileName: 'no-delat-ya-etogo-konechno-ne-budu---drujko',
      block: 'memes'
    },
    {
      title: 'Не точно',
      fileName: 'no-eto-ne-tochno-big-russian-boss',
      block: 'memes'
    },
    {
      title: 'nooooo',
      fileName: 'noo_1',
      block: 'no'
    },
    {
      title: 'kurwa',
      fileName: 'o-kurwa',
      block: 'no'
    },
    {
      title: 'open door',
      fileName: 'otkroyte-eto-fbr-3362',
      block: 'memes'
    },
    {
      title: 'чгк перерыв1',
      fileName: 'pause1',
      block: 'games'
    },
    {
      title: 'чгк перерыв2',
      fileName: 'pause2',
      block: 'games'
    },
    {
      title: 'чгк перерыв3',
      fileName: 'pause3',
      block: 'games'
    },
    {
      title: 'повезло',
      fileName: 'povezlo-povezlo',
      block: 'yes'
    },
    {
      title: 'russkaya-yarost',
      fileName: 'russkaya-yarost-ne-znayu-pochemu-eto-tak-nazyivaetsya-u-amerikantsev-3348',
      block: 'memes'
    },
    {
      title: 'just-do-it',
      fileName: 'sdelay-eto-just-do-it-3382',
      block: 'memes'
    },
    {
      title: 'СИ категории',
      fileName: 'si_categories',
      block: 'games'
    },
    {
      title: 'smoke_weed',
      fileName: 'smoke_weed_everyday_song',
      block: 'memes'
    },
    {
      title: 'somebody',
      fileName: 'somebodycena',
      block: 'memes'
    },
    {
      title: 'OOOOO',
      fileName: 'the-rap-battle-parody-oh',
      block: 'yes'
    },
    {
      title: 'well-be-right-back',
      fileName: 'well-be-right-back_qnufczo',
      block: 'memes'
    },
    {
      title: 'win err',
      fileName: 'window',
      block: 'no'
    },
    {
      title: 'zoom',
      fileName: 'zoo',
      block: 'effects'
    },
    {
      title: 'пам-пам-пааам',
      fileName: 'zvuk-feyla-3379',
      block: 'no'
    },
    {
      title: 'puls',
      fileName: 'zvuki-i-puls-byuschegosya-serdtsa-44140',
      block: 'effects'
    },
    {
      title: 'ЛОХ ПИДР',
      fileName: 'zvuk-iz-mema-s-golosom-gde-malchik-krichit-loh-pidr-3359',
      block: 'no'
    },
    {
      title: 'gta 5',
      fileName: 'zvuk-iz-mema-smert-v-gta-5-gta-v---wasted-3380',
      block: 'no'
    },
    {
      title: 'bzzzz',
      fileName: 'zvukovoy-effekt-nepravilnogo-otveta-wrong-buzzer-sound-effect',
      block: 'no'
    },
    {
      title: 'trevozhnaya-muzyka',
      fileName: 'zvuk-trevozhnaya-muzyka',
      block: 'effects'
    },
    {
      title: 'win start',
      fileName: 'zvuk-zapuska-vindyi-na-polnuyu-gromkost-300-beregite-ushi-3355',
      block: 'effects'
    },
    {
      title: 'zoyberg',
      fileName: 'zvuk-zoyberga-iz-futuramyi-3378',
      block: 'no'
    },
  ];
  blocks: { title: string, name: string }[] = [
    {
      title: 'Да',
      name: 'yes'
    },
    {
      title: 'Нет',
      name: 'no'
    },
    {
      title: 'Игры',
      name: 'games'
    },
    {
      title: 'Эффекты',
      name: 'effects'
    },
    {
      title: 'Мемы',
      name: 'memes'
    },
  ];
  private audio: HTMLAudioElement;

  constructor() {
  }

  ngOnInit(): void {

  }

  playSE(se?: { block?: string, title: string, fileName: string, }): void {
    if (this.audio) this.audio.pause();
    this.audio = new Audio();
    this.audio.src = '../../../assets/sounds/' + se.fileName + '.mp3';
    this.audio.load();
    this.audio.play();

  }

  resume(): void {
    if (!this.audio) {
      return;
    }
    this.audio.play();
  }

  stopAudio(): void {
    if (!this.audio) {
      return;
    }
    this.audio.pause();
  }

  getBlockList(block: string): {
    block?: string,
    title: string,
    fileName: string,
  }[] {
    return this.sounds.filter(s => s.block === block);
  }
}
