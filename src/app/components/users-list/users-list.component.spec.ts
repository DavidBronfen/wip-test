import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/observable/of';

import { UsersListComponent } from './users-list.component';
import { IUser } from '../../models/user';
import { UsersListService } from '../../services/users-list.service'
import { reducer } from '../../reducers';

const USER_OBJECT: IUser[] = [
    {
      'name': 'Nir Galon',
      'screen_name': 'nirgalon',
      'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
      'location': 'RG',
    }
];

class MockCategory {

  public getUsers(): Observable<IUser[]> {
    return Observable.of(USER_OBJECT);
  }
}

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersListComponent
      ],
      providers: [
        { provide: UsersListService, useClass: MockCategory }
      ],
      imports: [
        StoreModule.provideStore(reducer),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
