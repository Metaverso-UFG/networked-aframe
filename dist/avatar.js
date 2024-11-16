      // see issue https://github.com/networked-aframe/networked-aframe/issues/267
      NAF.schemas.getComponentsOriginal = NAF.schemas.getComponents;
      NAF.schemas.getComponents = (template) => {
        if (!NAF.schemas.hasTemplate('#avatar-template')) {
          NAF.schemas.add({
            template: '#avatar-template',
            components: [
              'position',
              'rotation',
              {
                selector: '.head',
                component: 'material',
                property: 'color'
              }
            ]
          });
        }
        const components = NAF.schemas.getComponentsOriginal(template);
        return components;
      };