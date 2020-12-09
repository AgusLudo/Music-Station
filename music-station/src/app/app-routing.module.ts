import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'metronome',
    loadChildren: () => import('./metronome/metronome.module').then( m => m.MetronomePageModule)
  },
  {
    path: 'chords',
    loadChildren: () => import('./chords/chords.module').then( m => m.ChordsPageModule)
  },
  {
    path: 'tuner',
    loadChildren: () => import('./tuner/tuner.module').then( m => m.TunerPageModule)
  },
  {
    path: 'harmony',
    loadChildren: () => import('./harmony/harmony.module').then( m => m.HarmonyPageModule)
  },
  {
    path: 'melody',
    loadChildren: () => import('./melody/melody.module').then( m => m.MelodyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
