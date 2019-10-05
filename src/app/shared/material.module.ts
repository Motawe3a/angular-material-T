import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule,
            MatTableModule,
            MatToolbarModule,
            MatIconModule,
            MatFormFieldModule,
            MatSortModule,
            MatPaginatorModule,
            MatInputModule],

  exports: [MatButtonModule,
            MatTableModule,
            MatToolbarModule,
            MatIconModule,
            MatFormFieldModule,
            MatSortModule,
            MatPaginatorModule,
            MatInputModule]
})
export class MaterialModule {}
