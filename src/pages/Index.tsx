import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Hero {
  id: number;
  name: string;
  title: string;
  type: string;
  image: string;
  stats: {
    attack: number;
    defense: number;
    magic: number;
  };
  description: string;
  quote: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Drow Ranger',
    title: 'Ледяная Стрелица',
    type: 'Agility',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png',
    stats: { attack: 9, defense: 4, magic: 6 },
    description: 'Мастер дальнего боя, чьи ледяные стрелы замораживают и пронзают врагов на огромном расстоянии. Её точность и скорость делают её смертельной угрозой.',
    quote: 'Тишина перед бурей - это я готовлю свой лук'
  },
  {
    id: 2,
    name: 'Zeus',
    title: 'Повелитель Грома',
    type: 'Intelligence',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png',
    stats: { attack: 6, defense: 3, magic: 10 },
    description: 'Бог грома, обрушивающий молнии на головы врагов. Нет места, где можно спрятаться от его божественного гнева и электрической ярости.',
    quote: 'Моя молния найдёт тебя везде!'
  },
  {
    id: 3,
    name: 'Sven',
    title: 'Странствующий Рыцарь',
    type: 'Strength',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png',
    stats: { attack: 8, defense: 8, magic: 4 },
    description: 'Могучий рыцарь с огромным мечом, способный превратиться в настоящего титана силы. Его удары сотрясают землю и сокрушают целые армии.',
    quote: 'Честь и сила - вот мой путь'
  },
  {
    id: 4,
    name: 'Queen of Pain',
    title: 'Королева Боли',
    type: 'Intelligence',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png',
    stats: { attack: 7, defense: 5, magic: 9 },
    description: 'Демоническая красавица, черпающая силу из страданий врагов. Её крик способен разорвать реальность, а магия приносит мучительную смерть.',
    quote: 'Страдание - это искусство, а я - мастер'
  },
  {
    id: 5,
    name: 'Windranger',
    title: 'Лесная Охотница',
    type: 'Intelligence',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png',
    stats: { attack: 7, defense: 6, magic: 7 },
    description: 'Стремительная лучница, управляющая силой ветра. Её скорость стрельбы превосходит воображение, а связывающие стрелы пронзают всё.',
    quote: 'Быстрее ветра, точнее молнии'
  }
];

const typeColors = {
  Strength: 'bg-primary/20 text-primary border-primary',
  Agility: 'bg-accent/20 text-accent border-accent',
  Intelligence: 'bg-secondary/20 text-secondary border-secondary'
};

const typeIcons = {
  Strength: 'Sword',
  Agility: 'Zap',
  Intelligence: 'Sparkles'
};

const Index = () => {
  const [activeHero, setActiveHero] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,103,51,0.1),transparent_50%)]" />
      
      <div className="relative">
        <header className="border-b-2 border-primary/30 bg-background/90 backdrop-blur-lg sticky top-0 z-50 shadow-xl">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse" />
                  <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Crown" size={28} className="text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-foreground">DOTA 2 ARENA</h1>
                  <p className="text-muted-foreground font-semibold">ТОП-5 ГЕРОЕВ НЕДЕЛИ</p>
                </div>
              </div>
              <Badge className="bg-primary text-white px-4 py-2 text-sm font-bold">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                META 2024
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Icon name="Star" size={18} className="text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Избранные герои</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Доминируй на поле боя с
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Легендарными героями
              </span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Самые мощные и популярные герои текущей меты. Изучи их сильные стороны и начни побеждать!
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {heroes.map((hero) => (
              <Card
                key={hero.id}
                className="group relative overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-muted hover:border-primary cursor-pointer bg-card"
                onMouseEnter={() => setActiveHero(hero.id)}
                onMouseLeave={() => setActiveHero(null)}
              >
                <div className="absolute top-4 left-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center border-2 border-primary font-bold text-primary">
                    #{hero.id}
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <Badge 
                    className={`${typeColors[hero.type as keyof typeof typeColors]} border-2 font-bold backdrop-blur-sm`}
                  >
                    <Icon name={typeIcons[hero.type as keyof typeof typeIcons]} size={14} className="mr-1" />
                    {hero.type}
                  </Badge>
                </div>

                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-muted to-background">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={hero.image}
                      alt={hero.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: 'drop-shadow(0 0 30px rgba(255,103,51,0.3))' }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{hero.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-4 italic">"{hero.title}"</p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Icon name="Sword" size={16} className="text-primary" />
                      </div>
                      <div className="text-xl font-bold">{hero.stats.attack}</div>
                      <div className="text-xs text-muted-foreground">Атака</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Icon name="Shield" size={16} className="text-accent" />
                      </div>
                      <div className="text-xl font-bold">{hero.stats.defense}</div>
                      <div className="text-xs text-muted-foreground">Защита</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Icon name="Sparkles" size={16} className="text-secondary" />
                      </div>
                      <div className="text-xl font-bold">{hero.stats.magic}</div>
                      <div className="text-xs text-muted-foreground">Магия</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {hero.description}
                  </p>

                  {activeHero === hero.id && (
                    <div className="pt-4 border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-lg">
                        <Icon name="MessageCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-foreground italic leading-relaxed">
                          "{hero.quote}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <section className="max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-card to-muted">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Icon name="Users" size={36} className="text-primary" />
                  </div>
                  <div className="text-5xl font-extrabold text-primary mb-2">{heroes.length}</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Топ героев</div>
                </div>

                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Icon name="Flame" size={36} className="text-accent" />
                  </div>
                  <div className="text-5xl font-extrabold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Винрейт</div>
                </div>

                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Icon name="Trophy" size={36} className="text-secondary" />
                  </div>
                  <div className="text-5xl font-extrabold text-secondary mb-2">Pro</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Уровень</div>
                </div>

                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Icon name="Target" size={36} className="text-primary" />
                  </div>
                  <div className="text-5xl font-extrabold text-primary mb-2">Meta</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Актуальность</div>
                </div>
              </div>
            </Card>
          </section>
        </main>

        <footer className="border-t-2 border-primary/30 bg-background/90 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Icon name="Gamepad2" size={24} className="text-primary" />
              <span className="text-lg font-bold">DOTA 2 ARENA</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Создано на платформе poehali.dev 🚀 • 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
