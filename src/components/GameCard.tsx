import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScor from './CriticScor';
import getCroppesImageUrl from '../services/image-url';

interface GameCartProps {
  game: Game;
}

function GameCard({ game }: GameCartProps) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppesImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScor score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
