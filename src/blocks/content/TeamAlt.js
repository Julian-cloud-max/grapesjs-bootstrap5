export default (bm, prefix) => {
  bm.add(`${prefix}team-alt`, {
    label: 'Leadership Team',
    category: 'Content',
    content: {
      type: `${prefix}team-alt`
    },
    attributes: {
      class: 'fas fa-users-cog'
    }
  });
}; 