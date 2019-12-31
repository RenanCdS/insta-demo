import { Component, OnInit, Input } from '@angular/core';
import { FollowerPhoto } from 'src/app/core/_models/follower-photo';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'card-more-options-modal',
  template: `
      <div class="container">
        <ul class="options-list">
            <li><button class="button-style danger">Denunciar conteúdo impróprio</button></li>
            <li><button class="button-style danger">Deixar de seguir</button></li>
            <li><button class="button-style">Ir para publicação</button></li>
            <li><button class="button-style">Compartilhar</button></li>
            <li><button class="button-style">Copiar link</button></li>
            <li><button class="button-style">Incorporar</button></li>
            <li><button class="button-style" (click)="onCancel()" >Cancelar</button></li>
        </ul>
      </div>
  `,
  styleUrls: ['./card.component.scss']

})
export class CardMoreOptionsModal {

  constructor(public dialogRef: MatDialogRef<CardMoreOptionsModal>) {}

  onCancel() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() followerPhoto: FollowerPhoto;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CardMoreOptionsModal, {
      width: '300px',
      height: '250px',
      panelClass: 'custom-dialog-container',
      
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
