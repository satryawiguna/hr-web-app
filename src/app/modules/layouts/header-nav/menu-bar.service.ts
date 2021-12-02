import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {
  enteredButton = false;
  isMatMenuOpen = false;
  prevButtonTrigger;
  currentTrigger;
  currentButton;

  listener = new Subject<any>();
  action;

  renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.listener.subscribe(res => {
      if (res == 'enter menu') {
        clearTimeout(this.action);
      } else if (res == 'leave') {
        this.action = setTimeout(() => {
          this.currentTrigger.closeMenu();
          this.isMatMenuOpen = false;
          this.renderer.removeClass(this.currentTrigger._element.nativeElement, 'cdk-focused');
          this.renderer.removeClass(this.currentTrigger._element.nativeElement, 'cdk-program-focused');
        }, 10);
      }
    });
  }

  menuenter(have_child= null) {
    this.listener.next('enter menu');
    this.isMatMenuOpen = true;
  }

  menuLeave(trigger= null, button= null) {
    this.listener.next('leave');
  }

  buttonEnter(trigger= null) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        trigger.openMenu();

        this.currentTrigger = trigger;
      } else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
        trigger.openMenu();

        this.currentTrigger = trigger;
      } else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
      }
    });
  }

  buttonLeave(trigger, button= null) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
      this.renderer.removeClass(trigger._element.nativeElement, 'cdk-focused');
      this.renderer.removeClass(trigger._element.nativeElement, 'cdk-program-focused');
    }, 100);
  }
}
