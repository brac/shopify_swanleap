import { Layout, Page, EmptyState, ResourcePicker } from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


class Index extends React.Component {
  state = {open: false};
  render() {
    return(
      <Page
        title="App in Development"
        primaryAction={{
          content: 'Add Products'
        }}
      >
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}/>
        <Layout>
          <EmptyState
            heading="Discount Some Stuff"
            action={{
            content: 'Select Products',
            onAction: () => this.setState({ open: true}),
          }} image={img}
          >
            <p>Select products to change their price temporarily</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
  handleSelection = (resources) => {
    this.setState({ open: false})
    console.log(resources)
  }
}

export default Index;