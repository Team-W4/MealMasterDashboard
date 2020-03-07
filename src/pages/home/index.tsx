import React from 'react';
import { Box } from '../../components/Containers';
import { DrawerCard } from '../../components/Cards';
import { Paragraph } from '../../components/Texts';

const HomePage: React.FC = () => {

  return (
    <Box>
      <Box height="100%" width="100%" position="absolute" backgroundColor="orange" />
      <DrawerCard>
        <Paragraph p="xxxl">
          {'I didn’t know how to start, the animation did contain a clear bounce that seem to be consistent with the use of the <ScrollView> component.\n\nHowever I was not use how the cards animations were organized.\n\nAs I was looking for inspiration, I googled for “React Native Wallet Animation” and as for many of my queries that start with “React Native”, the solution was provided by Brent Vatne in apple-wallet-cards-example.\n\nThat gave me a good sense on how to structure the component: put the cards in one container, and overlay a ScrollView on top of it.\n\nThen we can use the scroll animation value to drive the translation of each card.\n\nThat’s all Folks! Hope that you enjoyed this story.\n\nLooking forward to read your thoughts on this.\n\nIf you are looking to start a cool React Native project, Don’t forget to checkout React Native Sketch Elements, the most comprehensive React Native starter kit.'}
          {'I didn’t know how to start, the animation did contain a clear bounce that seem to be consistent with the use of the <ScrollView> component.\n\nHowever I was not use how the cards animations were organized.\n\nAs I was looking for inspiration, I googled for “React Native Wallet Animation” and as for many of my queries that start with “React Native”, the solution was provided by Brent Vatne in apple-wallet-cards-example.\n\nThat gave me a good sense on how to structure the component: put the cards in one container, and overlay a ScrollView on top of it.\n\nThen we can use the scroll animation value to drive the translation of each card.\n\nThat’s all Folks! Hope that you enjoyed this story.\n\nLooking forward to read your thoughts on this.\n\nIf you are looking to start a cool React Native project, Don’t forget to checkout React Native Sketch Elements, the most comprehensive React Native starter kit.'}
          {'I didn’t know how to start, the animation did contain a clear bounce that seem to be consistent with the use of the <ScrollView> component.\n\nHowever I was not use how the cards animations were organized.\n\nAs I was looking for inspiration, I googled for “React Native Wallet Animation” and as for many of my queries that start with “React Native”, the solution was provided by Brent Vatne in apple-wallet-cards-example.\n\nThat gave me a good sense on how to structure the component: put the cards in one container, and overlay a ScrollView on top of it.\n\nThen we can use the scroll animation value to drive the translation of each card.\n\nThat’s all Folks! Hope that you enjoyed this story.\n\nLooking forward to read your thoughts on this.\n\nIf you are looking to start a cool React Native project, Don’t forget to checkout React Native Sketch Elements, the most comprehensive React Native starter kit.'}
        </Paragraph>
      </DrawerCard>
    </Box>
  );
}

export default HomePage;
