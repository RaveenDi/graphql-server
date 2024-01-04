let chapters = [
    {id: '1', toc_id: '1', title: 'Zelda, Tears of the Kingdom'},
    {id: '2', toc_id: '1', title: 'Final Fantasy 7 Remake'},
    {id: '3', toc_id: '2', title: 'Elden Ring'},
    {id: '4', toc_id: '1', title: 'Mario Kart'},
    {id: '5', toc_id: '2', title: 'Pokemon Scarlet'},
  ]
  
  let sections = [
    {id: '1', title: 'mario', chapter_id: '1'},
    {id: '2', name: 'yoshi', chapter_id: '2'},
    {id: '3', name: 'peach', chapter_id: '3'},
  ]

  let tableOfContents = [
    {id: '1', title: 'mario'},
    {id: '2', title: 'yoshi'}
  ]
  
  let assets = [
    {id: '1', title: 'lorem ipsum', section_id: '3'},
    {id: '2', title: 'lorem ipsum', section_id: '1'},
    {id: '3', title: 'lorem ipsum', section_id: '3'},
    {id: '4', title: 'lorem ipsum', section_id: '4'},
    {id: '5', title: 'lorem ipsum', section_id: '5'},
    {id: '6', title: 'lorem ipsum', section_id: '2'},
    {id: '7', title: 'lorem ipsum', section_id: '1'},
  ]
  
  export default { tableOfContents, chapters, sections, assets }