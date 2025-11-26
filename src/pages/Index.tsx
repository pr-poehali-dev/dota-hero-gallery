import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Hero {
  id: number;
  name: string;
  title: string;
  role: string;
  difficulty: string;
  image: string;
  description: string;
  lore: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Shadow Fiend',
    title: 'Демон Душ',
    role: 'Carry',
    difficulty: 'Высокая',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/63f53cfe-d69b-464f-ba5d-a2e65c995055.jpg',
    description: 'Могущественный демон, собирающий души павших врагов для увеличения своей силы.',
    lore: 'Вырвавшись из преисподней, Shadow Fiend охотится за душами смертных. Каждая собранная душа усиливает его тёмную мощь.'
  },
  {
    id: 2,
    name: 'Mirana',
    title: 'Принцесса Луны',
    role: 'Support / Carry',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/820fda3d-1b71-4e28-9f35-f37b3c96c280.jpg',
    description: 'Элегантная наездница на белом тигре, использующая силу лунного света в бою.',
    lore: 'Mirana, принцесса Луны, вместе со своим верным спутником Sagan несёт правосудие под покровом ночи.'
  },
  {
    id: 3,
    name: 'Templar Assassin',
    title: 'Хранительница Тайн',
    role: 'Carry',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/694415ac-5480-48e5-9d76-6f532314c142.jpg',
    description: 'Таинственная убийца, владеющая псионическими клинками и техниками сокрытия.',
    lore: 'Lanaya защищает древние секреты Тайного Храма, безжалостно устраняя всех, кто угрожает её тайнам.'
  },
  {
    id: 4,
    name: 'Storm Spirit',
    title: 'Дух Бури',
    role: 'Carry / Nuker',
    difficulty: 'Высокая',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/d10972d1-b20e-4dcc-ad5f-94fac9817315.jpg',
    description: 'Электрический элементаль, способный превращаться в молнию и перемещаться по полю боя.',
    lore: 'Некогда смертный монах, теперь Storm Spirit - воплощение чистой электрической энергии с озорным характером.'
  },
  {
    id: 5,
    name: 'Faceless Void',
    title: 'Повелитель Времени',
    role: 'Carry',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/86b7e273-888b-42fe-bf5b-756c155ab3ee.jpg',
    description: 'Существо вне времени, способное останавливать время и манипулировать темпоральными потоками.',
    lore: 'Darkterror путешествует между измерениями, исполняя свою загадочную миссию по сохранению временного континуума.'
  }
];

const difficultyColors = {
  'Низкая': 'bg-secondary/20 text-secondary border-secondary/50',
  'Средняя': 'bg-accent/20 text-accent border-accent/50',
  'Высокая': 'bg-primary/20 text-primary border-primary/50'
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 pointer-events-none" />
      
      <div className="relative z-10">
        <header className="border-b border-primary/20 backdrop-blur-xl bg-background/60">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Icon name="Swords" size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold tracking-wider uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    DOTA 2
                  </h1>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">Элитные герои арены</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 uppercase tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Легендарные Бойцы
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Пять величайших героев Dota 2, каждый из которых обладает уникальными способностями 
              и может изменить ход любой битвы. Познакомьтесь с их историями и силой.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {heroes.map((hero, index) => (
              <Card
                key={hero.id}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] border-2 bg-card/40 backdrop-blur-sm ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{
                  borderColor: index % 3 === 0 ? 'hsl(var(--primary))' : index % 3 === 1 ? 'hsl(var(--accent))' : 'hsl(var(--secondary))'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  <div className={`relative ${index === 0 ? 'h-96' : 'h-72'} overflow-hidden`}>
                    <img
                      src={hero.image}
                      alt={hero.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge className="bg-background/90 backdrop-blur-sm border-primary/50 text-primary font-bold uppercase tracking-wide">
                        #{hero.id}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`${difficultyColors[hero.difficulty as keyof typeof difficultyColors]} backdrop-blur-sm font-semibold`}
                      >
                        <Icon name="TrendingUp" size={14} className="mr-1" />
                        {hero.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-3 border-secondary text-secondary uppercase tracking-wider">
                      <Icon name="Shield" size={12} className="mr-1" />
                      {hero.role}
                    </Badge>

                    <h3 className="text-4xl font-bold mb-2 uppercase tracking-tight">{hero.name}</h3>
                    <p className="text-accent text-lg mb-4 font-semibold italic">"{hero.title}"</p>

                    <p className="text-foreground leading-relaxed mb-4 text-base">
                      {hero.description}
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-start gap-3">
                        <Icon name="BookOpen" size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                          {hero.lore}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <section className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 text-center bg-primary/10 border-primary/30 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-bold mb-2 text-primary">{heroes.length}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Элитных героев</div>
              </Card>

              <Card className="p-8 text-center bg-accent/10 border-accent/30 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-accent" />
                </div>
                <div className="text-5xl font-bold mb-2 text-accent">∞</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Уникальных стилей</div>
              </Card>

              <Card className="p-8 text-center bg-secondary/10 border-secondary/30 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Trophy" size={32} className="text-secondary" />
                </div>
                <div className="text-5xl font-bold mb-2 text-secondary">Pro</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Уровень игры</div>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t border-primary/20 backdrop-blur-xl bg-background/60 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
                Dota 2 Elite Heroes Database
              </p>
              <p className="text-xs text-muted-foreground/60">
                Создано на poehali.dev • 2024
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
