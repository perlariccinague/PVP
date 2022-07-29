<?php
return array(
    'label' => array('Auftrag', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'client' => array(
            'label' => array('Kunde', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'website' => array(
            'label' => array('Website', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'cms' => array(
            'label' => array('CMS', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'cms_account' => array(
            'label' => array('CMS-Zugang', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'host' => array(
            'label' => array('Hoster', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'provider_login' => array(
            'label' => array('Provider Login', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'ftp_account' => array(
            'label' => array('FTP-Zugang', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'customer_access' => array(
            'label' => array('CMS-Kundenzugang', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'infos' => array(
            'label' => array('Weitere Infos', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'db_account' => array(
            'label' => array('Datenbank-Zugang', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'features' => array(
            'label' => array('Besonderheiten', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'responsive' => array(
            'inputType' => 'checkbox',
            'options' => array(
                '1' => 'Responsive'
            )
        ),
        'mail' => array(
            'label' => array('Mailversand', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'maintenance' => array(
            'label' => array('Wartungsvertrag', 'Beschreibung...'),
            'inputType' => 'text',
        ),
    ),
);