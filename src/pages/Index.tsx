import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Hero {
  id: number;
  name: string;
  title: string;
  role: string;
  attribute: string;
  image: string;
  description: string;
  abilities: string[];
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Invoker',
    title: 'Арсенал Магии',
    role: 'Маг / Carry',
    attribute: 'Intelligence',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/c9b840c3-2d5f-4d49-9cfa-6ac8ec62059d.jpg',
    description: 'Мастер магических искусств, способный призывать 10 различных заклинаний, комбинируя три стихии: огонь, лёд и молнию.',
    abilities: ['Cold Snap', 'Ghost Walk', 'Tornado', 'EMP']
  },
  {
    id: 2,
    name: 'Pudge',
    title: 'Мясник',
    role: 'Tank / Ganker',
    attribute: 'Strength',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/bfa0d6ab-1ae0-4514-bded-3d124614355a.jpg',
    description: 'Жуткий мясник с крюком, который может подтянуть врагов и разорвать их на части своей силой и гниющей плотью.',
    abilities: ['Meat Hook', 'Rot', 'Flesh Heap', 'Dismember']
  },
  {
    id: 3,
    name: 'Crystal Maiden',
    title: 'Ледяная Дева',
    role: 'Support / Disabler',
    attribute: 'Intelligence',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/7c56d68c-1bf3-4308-9368-5209550fcf68.jpg',
    description: 'Повелительница льда и холода, способная замораживать врагов и обрушивать на них снежные бури невероятной мощи.',
    abilities: ['Crystal Nova', 'Frostbite', 'Arcane Aura', 'Freezing Field']
  },
  {
    id: 4,
    name: 'Anti-Mage',
    title: 'Охотник на Магов',
    role: 'Carry / Escape',
    attribute: 'Agility',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/a494da51-940d-4e94-a3ec-8cda481835d5.jpg',
    description: 'Молниеносный воин, посвятивший жизнь уничтожению магии. Его клинки сжигают ману врагов, превращая их силу в их же гибель.',
    abilities: ['Mana Break', 'Blink', 'Counterspell', 'Mana Void']
  },
  {
    id: 5,
    name: 'Earthshaker',
    title: 'Сотрясатель Земли',
    role: 'Initiator / Disabler',
    attribute: 'Strength',
    image: 'https://cdn.poehali.dev/projects/8c7d7497-bd0c-4ce8-8efc-841a38a32ad5/files/cf82ba4d-457c-4abb-8649-1d179ca55ab7.jpg',
    description: 'Могучий воин стихий, способный сотрясать землю и создавать непроходимые барьеры, сокрушая всех врагов одним ударом.',
    abilities: ['Fissure', 'Enchant Totem', 'Aftershock', 'Echo Slam']
  }
];

const attributeIcons = {
  Strength: 'Sword',
  Agility: 'Zap',
  Intelligence: 'Sparkles'
};

const attributeColors = {
  Strength: 'bg-primary/20 text-primary border-primary/30',
  Agility: 'bg-secondary/20 text-secondary border-secondary/30',
  Intelligence: 'bg-accent/20 text-accent border-accent/30'
};

const Index = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <Icon name="Gamepad2" size={36} className="text-primary" />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">DOTA 2 HEROES</h1>
                <p className="text-muted-foreground text-sm">Легендарные герои арены</p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Выбери своего героя
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Познакомься с легендарными героями Dota 2. Каждый обладает уникальными способностями и ролью на поле боя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {heroes.map((hero) => (
              <Card
                key={hero.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                onClick={() => setSelectedHero(selectedHero?.id === hero.id ? null : hero)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={`${attributeColors[hero.attribute as keyof typeof attributeColors]} border font-semibold`}
                    >
                      <Icon name={attributeIcons[hero.attribute as keyof typeof attributeIcons]} size={14} className="mr-1" />
                      {hero.attribute}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{hero.name}</h3>
                  <p className="text-accent text-sm mb-3 font-medium">{hero.title}</p>
                  
                  <Badge variant="outline" className="mb-4">
                    <Icon name="Target" size={12} className="mr-1" />
                    {hero.role}
                  </Badge>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {hero.description}
                  </p>

                  {selectedHero?.id === hero.id && (
                    <div className="mt-4 pt-4 border-t border-border/50 animate-in fade-in duration-300">
                      <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                        <Icon name="Flame" size={16} className="text-primary" />
                        Основные способности
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {hero.abilities.map((ability, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Info" size={14} />
                      Нажми для деталей
                    </span>
                    {selectedHero?.id === hero.id && (
                      <Icon name="ChevronUp" size={16} className="text-primary animate-pulse" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center py-8">
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">{heroes.length}</div>
                <div className="text-xs text-muted-foreground">Героев</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-xs text-muted-foreground">Способностей</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-xs text-muted-foreground">Атрибута</div>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-border/50 backdrop-blur-sm bg-background/80 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
            <p>Dota 2 Heroes Database • Создано с помощью poehali.dev 🚀</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
