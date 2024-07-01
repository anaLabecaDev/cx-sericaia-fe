// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Header(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Header',
    templateName: 'Header',
    fields: [{ name: 'image', type: CommonFieldTypes.Image }],
  });
}
