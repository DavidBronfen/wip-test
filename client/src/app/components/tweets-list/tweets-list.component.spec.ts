import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/observable/of';

import { TweetsListComponent } from './tweets-list.component';
import { ITweet } from '../../models/tweet';
import { TweetsListService } from '../../services/tweets-list.service'
import { reducer } from '../../reducers';

const TWEET_OBJECT: ITweet[] = [
  {
    'text': 'I\'ve had these jeans since I was born And now they\'re ripped and now they\'re torn And all my friends have skateboards',
    'user': {
      'name': 'Nir Galon',
      'screen_name': 'nirgalon',
      'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
    }
  },
];

class MockCategory {

  public getTweets(): Observable<ITweet[]> {
    return Observable.of(TWEET_OBJECT);
  }
}

describe('TweetsListComponent', () => {
  let component: TweetsListComponent;
  let fixture: ComponentFixture<TweetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetsListComponent
      ],
      providers: [
        { provide: TweetsListService, useClass: MockCategory }
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
    fixture = TestBed.createComponent(TweetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
