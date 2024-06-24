import React from 'react'
import PageLayout from './page-layout'

type WithPageLayoutProps = {}

function withPageLayout<T extends WithPageLayoutProps = WithPageLayoutProps>(Page: React.ComponentType<T>) {

  const ComponentWithLayout = (props: Omit<T, keyof WithPageLayoutProps>) => {
    return (
      <PageLayout>
        <Page {...props} />
      </PageLayout>
    )
  }

  return ComponentWithLayout
}

export default withPageLayout