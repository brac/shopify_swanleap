import {
  Card,
  Layout,
  Page,
  Form,
  FormLayout,
  Stack,
  TextField
} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
  state = {
    discount: '10%'
  };

  render() {
    const { discount } = this.state;

    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection title="Default Discount" description="Add a product to the Sample App. It will automatically be discounted">
            <Card sectioned>

              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label={"Discount Percentage"}
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
//  TODO: Write handleSubmit and handleChange
}

export default AnnotatedLayout;