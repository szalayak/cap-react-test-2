import { useGetBooksQuery } from '../store/browse/entities';
import { Label, List, DynamicPage, StandardListItem, Title, DynamicPageTitle, Badge, Bar } from '@ui5/webcomponents-react';

export const Catalogue = () => {

  const { data: books, isLoading, error } = useGetBooksQuery({});

  return (
    <DynamicPage backgroundDesign='Transparent' headerTitle={
      <DynamicPageTitle header={<Title>{"Catalogue"}</Title>} subHeader={<Label>{"Browse the books"}</Label>}>{error && <Badge colorScheme='2'>Status: Error</Badge>}
      </DynamicPageTitle>}>

      <List busy={isLoading} busyDelay={0}>
        {books?.map(({ ID, title, author }) => <StandardListItem key={ID}
          description={author} type="Inactive">
          {title}
        </StandardListItem>)}
      </List>
    </DynamicPage>
  )
}