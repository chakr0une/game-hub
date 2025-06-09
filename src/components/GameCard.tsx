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
    <Card>
      <Image src={getCroppesImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScor score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
