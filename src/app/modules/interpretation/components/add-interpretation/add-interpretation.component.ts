import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InterpretationService } from '../../services/interpretation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-interpretation',
  templateUrl: './add-interpretation.component.html',
  styleUrls: ['./add-interpretation.component.css']
})
export class AddInterpretationComponent implements OnInit {
  @Input() visualizationTypeObject: any;
  @Input() rootUrl: string;
  @Output() onInterpretationCreate: EventEmitter<any> = new EventEmitter<any>();
  interpretation: any;
  creating: boolean;
  subscription: Subscription;

  constructor(private interpretationService: InterpretationService) {
    this.creating = false;
  }

  ngOnInit() {
    if (this.visualizationTypeObject) {
      this.interpretation = {
        id: this.visualizationTypeObject.id,
        type: this.visualizationTypeObject.type,
        message: ''
      };
    }
  }

  postInterpretation(e) {
    console.log('posting');
    e.stopPropagation();
    this.creating = true;
    this.subscription = this.interpretationService
      .create(this.interpretation, this.rootUrl)
      .subscribe(
        (interpretations: any[]) => {
          this.creating = false;
          this.interpretation.message = '';
          this.onInterpretationCreate.emit(interpretations);
        },
        error => console.log(error)
      );
  }

  cancel(e) {
    e.stopPropagation();
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.creating = false;
    }
    this.interpretation.message = '';
  }
}
