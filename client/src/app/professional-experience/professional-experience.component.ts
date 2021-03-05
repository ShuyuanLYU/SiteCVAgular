import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {
  PLUS_INFO = 'Voir plus d\'information';
  MOINS_INFO = 'Voir moins d\'information';

  ifDisplayAlternanceM2 = false;
  ifDisplayStageM1 = false;
  ifDisplayProjetTuto = false;

  buttonDisplayAlternanceM2 = this.PLUS_INFO;
  buttonDisplayStageM1 = this.PLUS_INFO;
  buttonDisplayProjetTuto = this.PLUS_INFO;
  constructor() {}

  ngOnInit(): void {
  }

  displayAlternanceM2(): void {
    this.ifDisplayAlternanceM2 = !this.ifDisplayAlternanceM2;
    this.buttonDisplayAlternanceM2 = this.ifDisplayAlternanceM2 ? this.MOINS_INFO : this.PLUS_INFO;
  }
  displayStageM1(): void {
    this.ifDisplayStageM1 = !this.ifDisplayStageM1;
    this.buttonDisplayStageM1 = this.ifDisplayStageM1 ? this.MOINS_INFO : this.PLUS_INFO;
  }
  displayProjetTuto(): void {
    this.ifDisplayProjetTuto = !this.ifDisplayProjetTuto;
    this.buttonDisplayProjetTuto = this.ifDisplayProjetTuto ? this.MOINS_INFO : this.PLUS_INFO;
  }

}
