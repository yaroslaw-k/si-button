import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PlayerComponent } from './components/player/player.component';
import { SoundEffectsComponent } from './components/sound-effects/sound-effects.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

const config: SocketIoConfig = {url: window.location.origin, options: {}};


@NgModule({
    declarations: [MainComponent, PlayerComponent, SoundEffectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule
  ]
})
export class MainModule { }
