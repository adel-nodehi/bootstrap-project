const faqData = [
    {
      question:
        'What factors should l consider when purchasing homeowners insurance?',
      answer:
        'The main factors to consider are: the value of your home, your location, the coverages you need, and your deductible.',
    },
    {
      question:
        'What are the policy limits (i.e, conveage limits) in the standard homeowners policy?',
      answer:
        'Standard homeowners policies typically have limits for: dwelling coverage, personal property coverage, liability coverage, and additional living expenses.',
    },
    {
      question: 'Where and when is my personal property coverd?',
      answer:
        'Your personal property is typically covered anywhere in the world, subject to certain limits and exclusions specified in your policy.',
    },
    {
      question: 'Do i need earhquake? How can l get it?',
      answer:
        'Earthquake coverage is usually excluded from standard homeowners policies. You may need to purchase a separate earthquake insurance policy, depending on your location and risk.',
    },
    {
      question: 'width does homeowners inuranc cove?',
      answer:
        'Homeowners insurance typically covers damage to your home and personal property caused by covered perils such as fire, theft, and certain natural disasters. It may also provide liability coverage.',
    },
  ];

  const listItems = document.querySelectorAll('.list');

  listItems.forEach((item) => {
    let answerElement;

    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index, 10);
      const answer = faqData[index].answer;

      if (answerElement) {
        answerElement.remove();
        answerElement = null;
      } else {
        answerElement = document.createElement('p');
        answerElement.textContent = answer;
        answerElement.style.backgroundColor = 'white';
        item.insertAdjacentElement('afterend', answerElement);
      }
    });
  });