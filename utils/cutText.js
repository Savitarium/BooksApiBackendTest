module.exports = (content, maxLength) => {
  if(typeof content !== 'string') return 'Error';
  if(typeof content !== 'number') return 'Error';
  if(content.length < 1) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
