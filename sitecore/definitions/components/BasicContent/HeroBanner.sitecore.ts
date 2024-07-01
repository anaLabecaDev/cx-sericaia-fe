// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HeroBanner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function HeroBanner(manifest: Manifest): void {
  manifest.addComponent({
    name: 'HeroBanner',
    templateName: 'HeroBanner',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'image', type: CommonFieldTypes.Image },
    ],
  });
}
