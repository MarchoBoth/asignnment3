import { ComplexCards } from './ComplexCards';

export const UserComplex = () => {
  const ussers = [
    {
      id: 1,
      name: 'Jason Kincaid',
      description:
        'I have something insightful to say, as usual. its kontolodon',
      region: 'UCLA',
      like: '2 seconds ago',
      //likeReplayTime: 25,
      gambar: 'https://example.com/images/iphone14pro.jpg',
    },
  ];
  return (
    <div>
      {ussers.map((complexCard) => {
        return (
          <ComplexCards
            key={complexCard.id}
            name={complexCard.name}
            description={complexCard.description}
            region={complexCard.region}
            like={complexCard.like}
            image={complexCard.gambar}
          />
        );
      })}
    </div>
  );
};
