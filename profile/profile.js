const members = {
  박성욱: {
    mbti: 'ENTP',
    strength: '주어진 일을 끝까지 책임지고 해내는 책임감을 가지고 있습니다',
    tag: '리더',
    github: 'SecretCandy',
    word: '모두 반갑습니다!! 열심히 화이팅 해봐요!! 👍',
  },
  김동영: {
    mbti: 'ENTJ',
    strength: '긍정적인 태도를 가지고 모든 상황에 대처합니다',
    tag: '팀원',
    velog: 'love1ace',
    github: 'love1ace',
    word: '화이팅',
  },
  김지환: {
    mbti: 'INFJ',
    strength: '회복탄력성이 좋고 매사에 최선을 다하는 편',
    tag: '팀원',
    github: 'RingKim1',
    word: '모두 화이팅!',
  },
  이한별: {
    mbti: 'ISTP',
    strength: '능동적이고 열정적인 성격입니다!',
    tag: '팀원',
    velog: '2hanbyeol1',
    github: '2hanbyeol1',
    word: '다같이 열심히 해봅시다 🐹',
  },
  곽선아: {
    mbti: 'INFP',
    strength: '끝까지 최선을 다하고 설득을 잘 합니다',
    tag: '팀원',
    velog: 'hellojoyworldz',
    github: 'hellojoyworldz',
    word: '반갑습니다 화이팅!',
  },
  윤건희: {
    mbti: 'ISFJ',
    strength: '분석적이고 꼼꼼한 편입니다',
    tag: '팀원',
    github: 'yoongunhee92',
    word: '다들 화이팅입니다',
  },
};

/**
 * url paramter로부터 팀원의 이름을 가져옵니다
 */
function getName() {
  const urlParams = new URL(location.href).searchParams;
  const name = urlParams.get('name');
  return name;
}

/**
 * 팀원의 이름을 이용하여 소개글을 넣습니다
 */
function setInfo(name, info) {
  $('#circle-img').attr('src', `../img/members/${info.github}.jpg`);
  $('#tag').text(info.tag);
  $('#name').text(name);
  $('#mbti').text(info.mbti);
  $('#strength').text(info.strength);
  $('#word').text(`" ${info.word} "`);

  // velog가 있는 경우에만 보여주기
  if (info.velog) {
    $('#velog').attr('href', `https://velog.io/@${info.velog}/posts`);
  } else {
    $('#velog').css('display', 'none');
  }

  $('#github').attr('href', `https://github.com/${info.github}`);
}

const profile_name = getName();
setInfo(profile_name, members[profile_name]);
