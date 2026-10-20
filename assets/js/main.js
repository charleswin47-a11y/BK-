/**
 * BIANCA KALD — ADVOCACIA PREVIDENCIÁRIA
 * SCRIPT PRINCIPAL & INTERATIVIDADE
 * Desenvolvido com foco em UX, Acessibilidade (WCAG) e Conversão Ética
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuração global de contato
  const WHATSAPP_BASE_URL = 'https://wa.me/5521983035139';

  /* -------------------------------------------------------------------
     1. HEADER SCROLL EFFECT
     ------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* -------------------------------------------------------------------
     2. MENU MOBILE RESPONSIVO & ACESSÍVEL
     ------------------------------------------------------------------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    const toggleMenu = (isOpen) => {
      const state = typeof isOpen === 'boolean' ? isOpen : !mobileNav.classList.contains('is-open');
      menuToggle.classList.toggle('is-active', state);
      mobileNav.classList.toggle('is-open', state);
      menuToggle.setAttribute('aria-expanded', state.toString());
      document.body.style.overflow = state ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Fechar ao clicar em um link interno
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Fechar com tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  /* -------------------------------------------------------------------
     3. NAVEGAÇÃO ATIVA VIA INTERSECTION OBSERVER
     ------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link, .mobile-nav .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }

  /* -------------------------------------------------------------------
     4. GUIA INTERATIVO DE DOCUMENTOS (TRIAGEM PRÉVIA)
     ------------------------------------------------------------------- */
  const guideTabBtns = document.querySelectorAll('.guide-tab-btn');
  const guidePanels = document.querySelectorAll('.guide-content-panel');
  const guideWhatsAppBtn = document.getElementById('guide-whatsapp-cta');

  if (guideTabBtns.length > 0) {
    guideTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        guideTabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        guidePanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const activePanel = document.getElementById(targetId);
        if (activePanel) {
          activePanel.classList.add('active');
          
          // Atualiza o link do CTA com o contexto do serviço selecionado
          if (guideWhatsAppBtn) {
            const serviceName = btn.textContent.trim();
            const message = encodeURIComponent(`Olá, Dra. Bianca Kald! Consultei o Guia de Documentos do seu site referente a *${serviceName}* e gostaria de orientação profissional para o meu caso.`);
            guideWhatsAppBtn.href = `${WHATSAPP_BASE_URL}?text=${message}`;
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------------
     5. FAQ ACCORDION ACESSÍVEL
     ------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');

    if (trigger && body) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Fecha outros itens para foco limpo
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-body').style.maxHeight = null;
          }
        });

        // Alterna o atual
        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          body.style.maxHeight = null;
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  /* -------------------------------------------------------------------
     6. BOTÕES DE SERVIÇOS COM MENSAGEM CONTEXTUALIZADA
     ------------------------------------------------------------------- */
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    const titleEl = card.querySelector('.service-title');
    const linkEl = card.querySelector('.service-action');
    if (titleEl && linkEl) {
      const serviceName = titleEl.textContent.trim();
      const message = encodeURIComponent(`Olá, Dra. Bianca Kald! Gostaria de uma avaliação jurídica referente a *${serviceName}*. Vi as informações no seu site institucional.`);
      linkEl.href = `${WHATSAPP_BASE_URL}?text=${message}`;
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('rel', 'noopener noreferrer');
    }
  });

  /* -------------------------------------------------------------------
     7. FORMULÁRIO DE CONTATO & MODAL DE CONFIRMAÇÃO
     ------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const modalOverlay = document.getElementById('contact-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalWaBtn = document.getElementById('modal-whatsapp-link');

  if (contactForm && modalOverlay) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const phone = document.getElementById('form-phone')?.value.trim();
      const service = document.getElementById('form-service')?.value;
      const message = document.getElementById('form-message')?.value.trim();
      const lgpdChecked = document.getElementById('form-lgpd')?.checked;

      if (!name || !phone) {
        alert('Por favor, preencha seu nome e telefone para contato.');
        return;
      }

      if (!lgpdChecked) {
        alert('Por favor, confirme a autorização de contato para prosseguir.');
        return;
      }

      // Prepara link dinâmico para WhatsApp
      const waText = encodeURIComponent(
        `Olá, Dra. Bianca Kald! Meu nome é *${name}*.\n` +
        `Telefone: ${phone}\n` +
        `Assunto/Serviço: *${service || 'Direito Previdenciário'}*\n` +
        `Mensagem: ${message || 'Gostaria de agendar uma consulta.'}`
      );

      if (modalWaBtn) {
        modalWaBtn.href = `${WHATSAPP_BASE_URL}?text=${waText}`;
      }

      // Exibe modal de confirmação
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');

      // Limpa formulário
      contactForm.reset();
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
      });
    }

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* -------------------------------------------------------------------
     8. MÁSCARA AUTOMÁTICA DE TELEFONE (FORMATO BRASILEIRO)
     ------------------------------------------------------------------- */
  const phoneInput = document.getElementById('form-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (v.length > 5) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)/, '($1');
      }
      e.target.value = v;
    });
  }
});
