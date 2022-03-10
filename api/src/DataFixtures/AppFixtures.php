<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\Invoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

const STATUS = ['SENDING', "CLOSE", "CANCEL"];

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i=0; $i < 10; $i++) { 
            $customer = new Customer();
            $customer
                ->setEmail($faker->companyEmail())
                ->setCompanyName($faker->words(2, true))
            ;

            for ($j=0; $j < rand(2, 9); $j++) { 
                $invoice = new Invoice();
                $invoice
                    ->setAmount(strval($faker->numberBetween(900, 8000)))
                    ->setSendingAt($faker->dateTimeBetween("-4 week", "-1 week"))
                    ->setStatus(STATUS[rand(0,2)])
                    ->setCustomer($customer)
                ;

                $manager->persist($invoice);
            }

            $manager->persist($customer);
        }
        

        $manager->flush();
    }
}
