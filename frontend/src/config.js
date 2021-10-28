/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */
import { SystemBlockView, SystemBlockEdit } from '@package/components';
import systemSVG from '@plone/volto/icons/computer.svg';

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      system: {
        id: 'system',
        title: 'System',
        icon: systemSVG,
        group: 'common',
        view: SystemBlockView,
        edit: SystemBlockEdit,
        restricted: false,
        mostUsed: true,
        sidebarTab: 1,
        security: {
          addPermission: [],
          view: [],
        },
      },
    },
  };

  return config;
}
