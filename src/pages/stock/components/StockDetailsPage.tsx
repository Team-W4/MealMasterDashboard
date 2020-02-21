import React from 'react';
import styled from '../../../styled';
import FavoriteIcon from '../../../components/Icons/Favorite';
import BackIcon from '../../../components/Icons/Back';
import ShareIcon from '../../../components/Icons/Share';
import Box from '../../../components/Containers/Box';
import IconButton from '../../../components/Buttons/IconButton';
import Label from '../../../components/Label';
import Tag from '../../../components/Tag';
import Title from '../../../components/Texts/Title';
import Subtitle from '../../../components/Texts/Subtitle';
import Visual from '../../../components/Visual';
import StockItemListCard from './StockItemListCard';

const StockDetailsScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const TagList = styled.ScrollView`
	flex-grow: 0;
	flex-shrink: 0;
	padding-left: ${({ theme: { space } }) => space.xxl};
	margin-bottom: ${({ theme: { space } }) => space.m};
`;

type TagProps = {
	id: number;
	name: string
};

type StockItemProps = {
	id: number;
	createdDate: string;
	expiryTime: string;
	quantity: string;
};

export type Props = {
  onFavorite?: () => void;
  onShare?: () => void;
  onBack: () => void;
	stockDetails?: {
		imageURI? : string;
		title?: string;
		tags?: Array<TagProps>;
		stockItems?: Array<StockItemProps>;
	};
};

const StockDetailsPage: React.FC<Props> = ({
  onFavorite,
  onBack,
  onShare,
	stockDetails,//: { imageURI, title, tags, stockItems },
}) => {
	const expireTag = true ? (
		<Tag value="Expires Soon!" variant="soon" />
	) : true ? (
		<Tag value="Expired!!" variant="expired" />
	) : (<></>);

	return (
		<StockDetailsScroll>
			<Box position="relative" mb="l">
				<Visual
					source={{
						uri:
							'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
					}}
				/>
				<Box position="absolute" right="xxxl" bottom="-25px">
					<IconButton onPress={onFavorite}>
						<FavoriteIcon variant="warning" />
					</IconButton>
				</Box>
				<Box position="absolute" left="xxxl" top="50px">
					<IconButton rounded flat size="normal" onPress={onBack}>
						<BackIcon size="normal" variant="warning" />
					</IconButton>
				</Box>
				<Box position="absolute" right="xxxl" top="50px">
					<IconButton rounded flat size="normal" onPress={onShare}>
						<ShareIcon size="normal" variant="warning" />
					</IconButton>
				</Box>
			</Box>
			<Box px="xxl">
				<Subtitle mb="s">PRODUCE</Subtitle>
				<Title mb="s">
					{'Title'}
				</Title>
			</Box>
			{true && (
				<TagList horizontal showsHorizontalScrollIndicator={false}>
					<Box mr="xs">
						{expireTag}
					</Box>
					{[{ id: 1, name: 'organic' }, { id: 2, name: 'italian' }, { id: 3, name: 'handmade' }, { id: 4, name: 'gluten' }, { id: 5, name: 'flour' }, { id: 6, name: 'pasta' }].map((tag: TagProps) => (
						<Box key={tag.id} alignSelf="flex-start" mr="xs">
							<Tag value={tag.name} />
						</Box>
					))}
				</TagList>
			)}
			{true && (
				[
					{ id: 2, createdDate: 'Thu Jun 24 2020 22:05:21 GMT-0500 (Eastern Standard Time)', quantity: '300', expiryTime: '15' },
					{ id: 3, createdDate: 'Thu Feb 20 2020 22:05:21 GMT-0500 (Eastern Standard Time)', quantity: '150', expiryTime: '5' },
					{ id: 1, createdDate: 'Thu Feb 19 2020 22:05:21 GMT-0500 (Eastern Standard Time)', quantity: '250', expiryTime: '2' },
					{ id: 2, createdDate: 'Thu Jun 24 2020 22:05:21 GMT-0500 (Eastern Standard Time)', quantity: '400', expiryTime: '-10' },
				].map((stockItem: StockItemProps) => (
					<Box key={stockItem.id} px="xxl" mb="m">
						<StockItemListCard
							expiryTime={stockItem.expiryTime}
							createdDate={stockItem.createdDate}
							quantity={stockItem.quantity}
						/>
					</Box>
				))
			)}
		</StockDetailsScroll>
	)
};

export default StockDetailsPage;
