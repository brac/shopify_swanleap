import { Layout, Page, EmptyState } from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  return (
    <Page
      primaryAction={{
        content: 'Add Products'
      }}
    >
      <Layout>
        <EmptyState heading="Discount Some Stuff"
          action={{
            content: 'Select Products',
            onAction: () => console.log('Bam!'),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily</p>
        </EmptyState>
      </Layout>
    </Page>
  )
};

export default Index;