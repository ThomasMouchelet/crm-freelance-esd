<?php

namespace App\Controller;

use App\Entity\Invoice;
use DateTime;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CreateInvoiceController extends AbstractController
{
    public function __invoke(Invoice $data)
    {
        $data->setSendingAt(new DateTime());

        if(!is_numeric( $data->getAmount())) throw new Exception("Error type of amount", 1);
            
        return $data;
    }
}
