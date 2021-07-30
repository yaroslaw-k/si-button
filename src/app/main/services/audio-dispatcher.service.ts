import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioDispatcherService {

  audioEvent: Subject<'yes' | 'no'> = new Subject<'yes' | 'no'>();

  constructor() { }
}
