import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../services/hero service/hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let myHeros: Hero[];
  //Mocking
  let mockHeroService: jasmine.SpyObj<HeroService>;
  beforeEach(() => {
    myHeros = [
      {
        id: 1,
        name: 'superman',
        strength: 11,
      },
      {
        id: 2,
        name: 'batman',
        strength: 20,
      },
      {
        id: 3,
        name: 'wonderWoman',
        strength: 15,
      },
    ];
    mockHeroService = jasmine.createSpyObj([
      'addHero',
      'deleteHero',
      'getHeroes',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(myHeros));
    component = new HeroesComponent(mockHeroService);
  });

  it('Test that heroes is empty', () => {
    expect(component.heroes.length).toEqual(0);
  });

  it('test heros length after calling ngOnInit ', () => {
    component.ngOnInit();
    expect(component.heroes.length).toEqual(3)
    expect(component.heroes[0].name).toBe('superman')
    expect(mockHeroService.getHeroes).toHaveBeenCalled()

  });

  it('test delete function',()=>{
    component.ngOnInit();
      component.delete(myHeros[1]);
      expect(component.heroes.length).toEqual(2)
    //   expect(mockHeroService.deleteHero).toHaveBeenCalled()
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(myHeros[1])
  })
});
