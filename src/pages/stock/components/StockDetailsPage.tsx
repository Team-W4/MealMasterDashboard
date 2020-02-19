import React from 'react';
import styled from '../../../styled';
import StyledCardWrapper from '../../../components/Cards/Card/StyledCardWrapper'
import Box from '../../../components/Containers/Box'
import Heading from '../../../components/Texts/Heading'
import Subtitle from '../../../components/Texts/Subtitle'
import Tag from '../../../components/Tag';

const StyledImage = styled.Image`
    height: 300px;
    border-top-right-radius: ${({ theme: { space } }) => space.s};
    border-top-left-radius: ${({ theme: { space } }) => space.s};
    border-bottom-right-radius: ${({ theme: { space } }) => space.s};
    border-bottom-left-radius: ${({ theme: { space } }) => space.s};
`;

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: ${({ theme: { space } }) => space.m};
`;

export type Props = {
	onBack: () => void;
	stockDetails?: {
		imageURI? : string;
		title?: string;
		tags?: Array<{ id: number; name: string }>;
	};
};

const StockDetailsPage: React.FC<Props> = ({
  onBack,
	stockDetails: { imageURI, title, tags },
}) => {
	return (
		<StyledCardWrapper>
			<Box px="xs" py="xs">
				<StyledImage source={{ uri: imageURI }}/>
			</Box>
			<Box px="m" py="xs">
				<Subtitle ml="s">{"Produce"}</Subtitle>
				<Heading mb="xs" ml="s">{title}</Heading>
				{tags && (
					<TagList horizontal showsHorizontalScrollIndicator={false}>
						{tags?.map((tag: {id: number; name: string; }) => (
							<Box key={tag.id} alignSelf="flex-start" mr="s">
								<Tag value={tag.name} />
							</Box>
						))}
					</TagList>
				)}
			</Box>
		</StyledCardWrapper>
	)
};

export default StockDetailsPage;
