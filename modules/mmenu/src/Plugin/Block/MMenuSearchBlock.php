<?php

namespace Drupal\mmenu\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a MMenu Search block.
 *
 * @Block(
 *   id = "mmenu_search",
 *   admin_label = @Translation("MMenu: Search")
 * )
 */
class MMenuSearchBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return \Drupal::formBuilder()->getForm('Drupal\search\Form\SearchBlockForm');
  }

}
