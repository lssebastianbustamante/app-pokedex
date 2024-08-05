import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async getPokemons() {
    return await this.pokemonRepository.find();
  }
  async getPokemon(id: number) {
    const pokemonFound = await this.pokemonRepository.findOne({
      where: {
        id,
      },
    });

    if (!pokemonFound)
      return new HttpException('Pokeon not found', HttpStatus.NOT_FOUND);
    return pokemonFound;
  }

  async battlePokemon(pokemonUno: number, pokemonDos: number) {
    const pokemon1: CreatePokemonDto = await this.pokemonRepository.findOne({
      where: { id: await pokemonUno },
    });

    const pokemon2: CreatePokemonDto = await this.pokemonRepository.findOne({
      where: {
        id: pokemonDos,
      },
    });
    if (!pokemon1 || !pokemon2)
      return new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    let attacker = pokemon1;
    let defender = pokemon2;

    if (
      pokemon2.speed > pokemon1.speed ||
      (pokemon2.speed === pokemon1.speed && pokemon2.attack > pokemon1.attack)
    ) {
      attacker = pokemon2;
      defender = pokemon1;
    }

    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = Math.max(1, attacker.attack - defender.defense);
      defender.hp -= damage;

      [attacker, defender] = [defender, attacker];

      return attacker;
    }
  }
}
