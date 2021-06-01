import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cv-pdf',
  templateUrl: './cv-pdf.component.html',
  styleUrls: ['./cv-pdf.component.css']
})
export class CvPdfComponent implements OnInit {

  pdfSrc = '../assets/CV - LYU Shuyuan.pdf';
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
