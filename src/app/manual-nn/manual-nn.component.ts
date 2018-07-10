import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-nn',
  templateUrl: './manual-nn.component.html',
  styleUrls: ['./manual-nn.component.css']
})
export class ManualNnComponent {

  private readonly N = 2000;
  private readonly X_MAX = 400;
  private readonly Y_MAX = 400;
  private readonly LEARNING_RATE = .2;

  readonly POINT_RADIUS = 2;

  private weights;

  public points;

  constructor() {
    this.points = this.randomPoints();
    this.initTraining();
  }

  private initWeights() {
    this.weights = this.randomWeights();
  }

  private initTraining() {
    this.initWeights();
    for (let i = 0; i < (this.N / 1.5); i++) {
      const point = this.points[i];
      this.train(point, this.team(point));
    }
    this.guessAllPoints();
  }

  private guessAllPoints() {
    this.points.forEach(point => {
      point.guessed = this.guess(point);
    });
  }

  /**
   * Generate x and y random weights (-1..1).
   * @returns {{x: number; y: number}}
   */
  private randomWeights() {
    return {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
  }

  /**
   * Update weights according to error.
   * @param point
   * @param team
   */
  private train(point, team) {
    const guessResult = this.guess(point);
    const error = team - guessResult;
    this.weights = {
      x: this.weights.x + (point.x * error),
      y: this.weights.y + (point.y * error)
    };
  }

  /**
   * Know what teams a particular point belongs to
   * using the mathematical formula.
   * @param point
   * @returns {number}
   */
  team(point) {
    return point.x > point.y ? 1 : -1;
  }

  /**
   * Will guess the team with using a neural network algorithm.
   * We first start by giving random weights.
   * Weights (that are contained in the point object) are (kind of) the brain state of our NN.
   * @param point
   */
  guess(point) {
    const sum =
      point.x * this.weights.x +
      point.y * this.weights.y;
    return sum >= 0 ? 1 : -1;
  }

  /**
   * Generate N random points.
   * @returns {any[]}
   */
  private randomPoints() {
    const result = [];
    for (let i = 0; i < this.N; i++) {
      result.push({
        x: Math.random() * (this.X_MAX - this.POINT_RADIUS * 2) + this.POINT_RADIUS,
        y: Math.random() * (this.Y_MAX - this.POINT_RADIUS * 2) + this.POINT_RADIUS
      });
    }
    return result;
  }

}
