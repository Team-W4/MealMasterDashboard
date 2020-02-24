import React from 'react';
import styled from '../../../styled';
import { StockItem, StockDetails, Tag as TagType } from '../../../constants/dataTypes';
import FavoriteIcon from '../../../components/Icons/Favorite';
import BackIcon from '../../../components/Icons/Back';
import ShareIcon from '../../../components/Icons/Share';
import Box from '../../../components/Containers/Box';
import IconButton from '../../../components/Buttons/IconButton';
import Button from '../../../components/Buttons/Button';
import Tag from '../../../components/Tag';
import Title from '../../../components/Texts/Title';
import Subtitle from '../../../components/Texts/Subtitle';
import Visual from '../../../components/Visual';
import StockItemListCard from './StockItemListCard';
import titleHelper from '../../../utils/titleHelper';

const StockDetailsScroll = styled.ScrollView`
  flex: 1;
	width: 100%;
`;

const TagList = styled.ScrollView`
	flex-grow: 0;
	flex-shrink: 0;
	padding-left: ${({ theme: { space } }) => space.l};
	margin-bottom: ${({ theme: { space } }) => space.xl};
`;

export type Props = {
  onFavorite?: () => void;
	onShare?: () => void;
	onBack: () => void;
	onAddEdit: (params?: any) => void;
	stockDetails?: StockDetails;
};

const StockDetailsPage: React.FC<Props> = ({
  	onFavorite,
	onShare,
  onBack,
	onAddEdit,
	stockDetails: { id, foodName, tags, stockItems },
}) => {
	const expireTag = true ? (
		<Tag value="Expires Soon!" variant="soon" />
	) : true ? (
		<Tag value="Expired!!" variant="expired" />
	) : (<></>);

	return (
		<Box height="100%" width="100%">
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
				<Box px="l">
					<Subtitle mb="s">PRODUCE</Subtitle>
					{foodName && (
						<Title mb="s">
							{titleHelper(foodName)}
						</Title>
					)}
				</Box>
				{tags && (
					<TagList horizontal showsHorizontalScrollIndicator={false}>
						<Box mr="xs">
							{expireTag}
						</Box>
						{tags.map((tag: TagType) => (
							<Box key={tag.id} alignSelf="flex-start" mr="xs">
								<Tag value={tag.name} />
							</Box>
						))}
					</TagList>
				)}
				{stockItems && (
					<>
						{stockItems
						.sort((a, b) =>  new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime())
						.map((stockItem: StockItem) => (
								<Box key={stockItem.id} px="l" mb="m">
									<StockItemListCard
										expirationDate={stockItem.expirationDate}
										createdDate={stockItem.dateObtained}
										quantity={stockItem.quantity}
										onPress={() => onAddEdit({ stockItemId: stockItem.id })}
									/>
								</Box>
						))}
						<Box height="90px" />
					</>
				)}
			</StockDetailsScroll>
			<Box position="absolute" bottom="xxxl" px="l" width="100%">
				<Button variant="warning" title="Add some more" onPress={() => onAddEdit()} />
			</Box>
		</Box>
	)
};

export default StockDetailsPage;
