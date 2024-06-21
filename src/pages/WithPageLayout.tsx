import React from 'react'
import Layout from '../layouts/Layout'

type WithPageLayoutProps = {}

function withPageLayout<T extends WithPageLayoutProps = WithPageLayoutProps>(Page: React.ComponentType<T>) {

  const ComponentWidthLayout = (props: Omit<T, keyof WithPageLayoutProps>) => {

    return (
      <Layout>
        <Page {...props} />
      </Layout>
    )
  }

  return ComponentWidthLayout
}

export default withPageLayout
