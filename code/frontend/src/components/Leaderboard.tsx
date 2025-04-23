import { Card } from '@/components/ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboardData = [
  { name: "Aakriti Mehta", score: 95, games: 20 },
  { name: "Khushi Menpara", score: 90, games: 15 },
  { name: "Eeshanaya Joshi", score: 85, games: 18 },
  { name: "Romil Lodaya ", score: 80, games: 12 },
  { name: "Harsh Nagrani ", score: 75, games: 10 },
];

export function Leaderboard() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-500" />
        Top Fake News Detectors
      </h3>
      
      <div className="space-y-4">
        {leaderboardData.map((player, index) => (
          <div
            key={player.name}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              {index === 0 && <Medal className="h-5 w-5 text-yellow-500" />}
              {index === 1 && <Medal className="h-5 w-5 text-gray-400" />}
              {index === 2 && <Medal className="h-5 w-5 text-amber-700" />}
              {index > 2 && <Award className="h-5 w-5 text-muted-foreground" />}
              
              <div>
                <p className="font-medium">{player.name}</p>
                <p className="text-sm text-muted-foreground">
                  {player.games} games played
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-xl font-bold">{player.score}</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}